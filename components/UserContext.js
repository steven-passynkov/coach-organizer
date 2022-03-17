import React, { useEffect, createContext, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true)
  const [sessionLoading, setSessionLoading] = useState(true);
  const [userData, setUserData] = useState(null)
  const [name, setName] = useState("");
  const [nameLoading, setNameLoading] = useState(true);
  const [nameModleLoading, setNameModleLoading] = useState(true);
  const [events, setEvents] = useState();
  const [eventsLoading, setEventsLoading] = useState(true);
  const [facilities, setFacilities] = useState()
  const [facilitiesLoading, setFacilitiesLoading] = useState(true)
  const [studentNames, setStudentNames] = useState();
  const [showMessaging, setShowMessaging] = useState(false)

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
  }

  const selectUser = async () => {
    let { data, error } = await supabase
      .from("profiles")
      .select("name")
      .eq("id", session.user.id);
    setNameLoading(false);
    setName(data[0].name);
  };

  const selectEvents = async () => {
    let { data, error } = await supabase.from("events").select();
    setEvents(data)
    setEventsLoading(false)
  };

  const selectLocation = async () => {
    let { data, error } = await supabase.from("facilities").select();
    setFacilities(data)
    setFacilitiesLoading(false)
  }

  const selectStudents = async () => {
    let { data, error } = await supabase.from("profiles").select("name");
    setStudentNames(data);
  };

  useEffect(() => {
    if (session != null) {
      selectUserData();
      selectUser();
      selectEvents();
      selectLocation();
      selectStudents();
      setLoading(false)
    }
  }, [session]);

  useEffect(() => {
    if (nameModleLoading == false) {
      newUser();
    }
  }, [nameModleLoading]);

  return (
    <UserContext.Provider
      value={{
        session,
        loading,
        setLoading,
        setSession,
        sessionLoading,
        setSessionLoading,
        userData,
        setUserData,
        name,
        setName,
        nameLoading,
        setNameLoading,
        nameModleLoading,
        setNameModleLoading,
        events,
        setEvents,
        eventsLoading,
        setEventsLoading,
        facilities,
        setFacilities,
        facilitiesLoading,
        setFacilitiesLoading,
        studentNames,
        setStudentNames,
        showMessaging,
        setShowMessaging,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
