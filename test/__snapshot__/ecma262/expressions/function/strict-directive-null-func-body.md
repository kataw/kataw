# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, allowTypes: true }
`````

## Input

`````js
(function () {
  'use strict';
   '\0';
   }())
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 1,
                            "end": 9
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 11,
                            "end": 11
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [
                                    {
                                        "kind": 201392131,
                                        "text": "use strict",
                                        "rawText": "'use strict'",
                                        "flags": 4194401,
                                        "start": 14,
                                        "end": 29
                                    }
                                ],
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "\u0000",
                                            "rawText": "'\\0'",
                                            "flags": 4194401,
                                            "start": 30,
                                            "end": 38
                                        },
                                        "flags": 16,
                                        "start": 30,
                                        "end": 39
                                    }
                                ],
                                "flags": 4194337,
                                "start": 14,
                                "end": 39
                            },
                            "flags": 32,
                            "start": 12,
                            "end": 44
                        },
                        "returnType": null,
                        "flags": 32,
                        "start": 1,
                        "end": 44
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 45,
                        "end": 45
                    },
                    "flags": 268435488,
                    "start": 1,
                    "end": 46
                },
                "flags": 0,
                "start": 32,
                "end": 47
            },
            "flags": 16,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "(function () {\n  'use strict';\n   '\\0';\n   }())",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

(function () {
'\'use strict\'';
  '\'\0\'';
}());

```

### Diagnostics

```javascript
✔ No errors
```

