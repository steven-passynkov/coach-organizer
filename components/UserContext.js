import React, { useEffect, createContext, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [sessionLoading, setSessionLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState("");
  const [nameModleLoading, setNameModleLoading] = useState(true);
  const [events, setEvents] = useState(null);
  const [facilities, setFacilities] = useState(null);
  const [studentNames, setStudentNames] = useState(null);
  const [uuidName, setUuidName] = useState(null);
  const [messages, setMessages] = useState(null);
  const [lessons, setLessons] = useState(null);
  const [facilitiesLessons, setFacilitiesLessons] = useState(null);
  const [openLessons, setOpenLessons] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    setSessionLoading(false);
  }, []);

  const selectUserData = async () => {
    let { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", session.user.id);
    setUserData(data);
  };

  const selectUser = async () => {
    let { data, error } = await supabase
      .from("profiles")
      .select("name")
      .eq("id", session.user.id);
    setName(data[0].name);
  };

  const selectEvents = async () => {
    let { data, error } = await supabase.from("events").select();
    setEvents(data);
  };

  const selectLocation = async () => {
    let { data, error } = await supabase.from("facilities").select();
    setFacilities(data);
  };

  const selectStudents = async () => {
    let { data, error } = await supabase.from("profiles").select("name");
    setStudentNames(data);
  };

  const selectUuidName = async () => {
    let { data, error } = await supabase.from("profiles").select("id,name");
    setUuidName(data);
  };

  const selectLessons = async () => {
    let { data, error } = await supabase.from("lessons").select();
    setLessons(data);
    console.log(data);
  };

  const selectMessages = async () => {
    let { data, error } = await supabase
      .from("messaging")
      .select("*")
      .or(
        `profile_sent.eq.${userData[0].id},profile_received.eq.${userData[0].id}`
      );
    setMessages(data);
  };

  const subscribeMessage = supabase
    .from("messaging")
    .on("*", () => {
      if (userData != null) {
        selectMessages();
      }
    })
    .subscribe();

  const subscribeLessons = supabase
    .from("lessons")
    .on("*", () => {
      selectLessons();
    })
    .subscribe();

  useEffect(() => {
    if (session !== null && sessionLoading == false) {
      selectUserData();
      selectUser();
      selectEvents();
      selectLocation();
      selectStudents();
      selectUuidName();
      selectLessons();
      setLoading(false);
    }
  }, [session]);

  useEffect(() => {
    if (userData !== null) {
      selectMessages();
    }
  }, [userData]);

  useEffect(() => {
    if (nameModleLoading == false) {
      newUser();
    }
  }, [nameModleLoading]);
/*
  useEffect(() => {
    if (lessons !== null && facilities !== null && events !== null) {
      const openFacilities = facilities.filter((facilitie) => {
        return events.some((event) => event.location === facilitie.id);
      });
      setFacilitiesLessons(openFacilities);
    }
  }, [lessons, facilities, events]);

  useEffect(() => {
    if (lessons !== null && events !== null && facilitiesLessons !== null) {
      const openLessons = events.filter((event) => {
        return lessons.some((lesson) => lesson.event === event.id);
      });
      const newOpenLessons = openLessons.map((lesson) => {
        const facility = facilitiesLessons.find(
          (fac) => fac.id === lesson.location
        );
        return { ...lesson, facility };
      });
      setOpenLessons(newOpenLessons);
    }
  }, [lessons, events, facilitiesLessons]);
*/
  return (
    <UserContext.Provider
      value={{
        session,
        setSession,
        loading,
        setLoading,
        sessionLoading,
        setSessionLoading,
        userData,
        setUserData,
        name,
        setName,
        nameModleLoading,
        setNameModleLoading,
        events,
        setEvents,
        facilities,
        setFacilities,
        studentNames,
        setStudentNames,
        uuidName,
        setUuidName,
        messages,
        setMessages,
        lessons,
        setLessons,
        facilitiesLessons,
        setFacilitiesLessons,
        openLessons,
        setOpenLessons
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
