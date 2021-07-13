# Kataw parser test case

## Input

`````js
let x = '\00';

let y = '\\09';

let z = '\\009';

'use strict'; let q = '\\0';
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "\u00000",
                            "rawText": "'\\00'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 13
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 13
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 13
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 14,
                "end": 19
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 21
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "\\09",
                            "rawText": "'\\\\09'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 30
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 19,
                        "end": 30
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 19,
                "end": 30
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 14,
            "end": 31
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 31,
                "end": 36
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 38
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "\\009",
                            "rawText": "'\\\\009'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 48
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 36,
                        "end": 48
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 36,
                "end": 48
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 31,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "transformFlags": 0,
                "start": 49,
                "end": 63
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 49,
            "end": 64
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 64,
                "end": 68
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "q",
                            "rawText": "q",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 68,
                            "end": 70
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "\\0",
                            "rawText": "'\\\\0'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 72,
                            "end": 78
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 68,
                        "end": 78
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 68,
                "end": 78
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 64,
            "end": 79
        }
    ],
    "isModule": false,
    "source": "let x = '\\00';\n\nlet y = '\\\\09';\n\nlet z = '\\\\009';\n\n'use strict'; let q = '\\\\0';",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript
let x = "'\00'";
let y = "'\\09'";

let z = "'\\009'";

"'use strict'";

let q = "'\\0'";

```

### Diagnostics

```javascript
✔ No errors
```

