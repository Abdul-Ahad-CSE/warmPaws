import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import CardDetailsCard from "../CardDetailsCard/CardDetailsCard";

export default function CardDetails() {
  const data = useLoaderData();
  const { serviceId } = useParams();
  console.log(serviceId, data);

  const [service, setService] = useState({});

  useEffect(() => {
    const serviceDetails = data.find(
      (singleService) => singleService.serviceId == serviceId
    );
    setService(serviceDetails);
  }, [data, serviceId]);

  return (
    <div>
      <CardDetailsCard service={service}></CardDetailsCard>
    </div>
  );
}
