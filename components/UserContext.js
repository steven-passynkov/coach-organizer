import React, { useEffect, createContext, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessionLoading, setSessionLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState("");
  const [nameModleLoading, setNameModleLoading] = useState(true);
  const [events, setEvents] = useState();
  const [facilities, setFacilities] = useState();
  const [studentNames, setStudentNames] = useState();
  const [showMessaging, setShowMessaging] = useState(false);
  const [uuidName, setUuidName] = useState();

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

  useEffect(() => {
    if (session != null && sessionLoading == false) {
      selectUserData();
      selectUser();
      selectEvents();
      selectLocation();
      selectStudents();
      selectUuidName();
      setLoading(false);
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
        showMessaging,
        setShowMessaging,
        uuidName,
        setUuidName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
