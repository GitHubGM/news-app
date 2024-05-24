import {UiProfileIcon} from "@/UI/UiProfileIcon";
import React from "react";
import {UiEditIcon} from "@/UI/UiEditIcon";
import {UiDeleteIcon} from "@/UI/UiDeleteIcon";

export function MyComment(){
    return (
        <div className="flex mb-4 p-4">
            <UiProfileIcon/>
            <div className="flex-1 border-b-gray-300 border border-l-0 border-r-0 border-t-0 ml-4">
                <h3 className="text-xl">Сіз</h3>
                <p className="text-blue-950 text-opacity-70">Интернетте танымал актер әрі режиссер Нұртас Адамбаевтың &quot;Ауылдан қашу. Махаббат операциясы&quot; толық метражды комедиясының трейлері жарияланды.</p>
                <div className="mt-2 flex justify-end">
                    <UiEditIcon/>
                    <UiDeleteIcon/>
                </div>
            </div>
        </div>
    )
}