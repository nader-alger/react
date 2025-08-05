import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
import DefinitionSearch from "../Components/DefinitionSearch";

export default function Ditionary() {

    return (
    <div className="flex justify-center">
        <DefinitionSearch />
    </div>
)

} 