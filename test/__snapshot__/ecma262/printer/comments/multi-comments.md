# Kataw parser test case

## Input

`````js
// #8323

import { MapViewProps } from 'react-native-maps'; /*
comment 14
*/ /* comment1
10
*/ /*/ comment 13 */
/*
 comment 9
 ****/

x; /*
1 */ /* 2 */

y

x; /*1*//*2*/
y;
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
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 16
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 38
                },
                "from": {
                    "kind": 201392131,
                    "text": "react-native-maps",
                    "rawText": "'react-native-maps'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 58
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 33,
                "end": 58
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
                                    "text": "MapViewProps",
                                    "rawText": "MapViewProps",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 31
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 31
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 31
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 33
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 33
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 0,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "comment",
                "rawText": "comment",
                "flags": 97,
                "transformFlags": 0,
                "start": 59,
                "end": 106
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 59,
            "end": 106
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 13,
                    "rawText": "13",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 106,
                    "end": 109
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 96,
                    "transformFlags": 32,
                    "start": 109,
                    "end": 111
                },
                "right": {
                    "kind": 371,
                    "text": "/",
                    "rawText": "/",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 111,
                    "end": 112
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 106,
                "end": 112
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 106,
            "end": 112
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "transformFlags": 0,
                "start": 112,
                "end": 136
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 112,
            "end": 137
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 97,
                "transformFlags": 0,
                "start": 137,
                "end": 156
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 137,
            "end": 156
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "transformFlags": 0,
                "start": 156,
                "end": 159
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 156,
            "end": 160
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 97,
                "transformFlags": 0,
                "start": 160,
                "end": 173
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 160,
            "end": 174
        }
    ],
    "isModule": false,
    "source": "// #8323\n\nimport { MapViewProps } from 'react-native-maps'; /*\ncomment 14\n*/ /* comment1\n10\n*/ /*/ comment 13 */\n/*\n comment 9\n ****/\n\nx; /*\n1 */ /* 2 */\n\ny\n\nx; /*1*//*2*/\ny;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 174
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `import` keyword can only be used with the module goal - start: 0, end: 18
✖ '; ' expected - start: 106, end: 109
✖ Unterminated regular expression - start: 111, end: 112

```

