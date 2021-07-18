# Kataw parser test case

### Printer Options

`````js
{ printWidth: 120, noObjectCurlySpacing: true }
`````

### Options

`````js
{ module: true, allowTypes: true }
`````

## Input

`````js
import {
  runTaskForChanged,
  description,
  someOtherLabel,
  thatMakes,
  itGo,
  multiLine,
  andMore,
  soWeCanGetItTo80Columns
} from '.';
import {fitsIn, oneLine} from '.';
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 135,
                    "end": 140
                },
                "from": {
                    "kind": 201392131,
                    "text": ".",
                    "rawText": "'.'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 140,
                    "end": 144
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 135,
                "end": 144
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": null,
                "namedImports": {
                    "kind": 267,
                    "importsList": {
                        "kind": 265,
                        "specifiers": [
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "runTaskForChanged",
                                    "rawText": "runTaskForChanged",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 28
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 28
                            },
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "description",
                                    "rawText": "description",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 43
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 43
                            },
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "someOtherLabel",
                                    "rawText": "someOtherLabel",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 61
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 61
                            },
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "thatMakes",
                                    "rawText": "thatMakes",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 62,
                                    "end": 74
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 74
                            },
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "itGo",
                                    "rawText": "itGo",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 75,
                                    "end": 82
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 75,
                                "end": 82
                            },
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "multiLine",
                                    "rawText": "multiLine",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 83,
                                    "end": 95
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 83,
                                "end": 95
                            },
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "andMore",
                                    "rawText": "andMore",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 96,
                                    "end": 106
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 96,
                                "end": 106
                            },
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "soWeCanGetItTo80Columns",
                                    "rawText": "soWeCanGetItTo80Columns",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 107,
                                    "end": 133
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 107,
                                "end": 133
                            }
                        ],
                        "flags": 1,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 133
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 135
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 135
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 145
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 145,
                "end": 152
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 170,
                    "end": 175
                },
                "from": {
                    "kind": 201392131,
                    "text": ".",
                    "rawText": "'.'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 175,
                    "end": 179
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 170,
                "end": 179
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": null,
                "namedImports": {
                    "kind": 267,
                    "importsList": {
                        "kind": 265,
                        "specifiers": [
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "fitsIn",
                                    "rawText": "fitsIn",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 154,
                                    "end": 160
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 154,
                                "end": 160
                            },
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "oneLine",
                                    "rawText": "oneLine",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 161,
                                    "end": 169
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 161,
                                "end": 169
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 154,
                        "end": 169
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 152,
                    "end": 170
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 145,
                "end": 170
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 145,
            "end": 180
        }
    ],
    "isModule": true,
    "source": "import {\n  runTaskForChanged,\n  description,\n  someOtherLabel,\n  thatMakes,\n  itGo,\n  multiLine,\n  andMore,\n  soWeCanGetItTo80Columns\n} from '.';\nimport {fitsIn, oneLine} from '.';",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 180
}
```

### Printed

```javascript
import {
   runTaskForChanged,
   description,
   someOtherLabel,
   thatMakes,
   itGo,
   multiLine,
   andMore,
   soWeCanGetItTo80Columns
} from "'.'";
import { fitsIn,  oneLine} from "'.'";

```

### Diagnostics

```javascript
✔ No errors
```

