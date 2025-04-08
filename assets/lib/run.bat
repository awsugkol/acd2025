@echo off
setlocal enabledelayedexpansion

rem Loop through all files containing "abc"
for %%f in (*Soumyadeep_Mandal_imsampro_SaM_*) do (
    rem Generate a random 32-character string
    set "randStr="
    for /L %%i in (1,1,32) do (
        set /a "randNum=!random! %% 36"
        if !randNum! lss 10 (
            set "randStr=!randStr!!randNum!"
        ) else (
            set /a "charNum=!randNum! - 10"
            set "randStr=!randStr!!charNum!"
        )
    )
    
    rem Rename the file
    ren "%%f" "%%~nf_!randStr!%%~xf"
)

endlocal