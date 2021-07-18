# Kataw parser test case

## Input

`````js
do throw function (v, h) {
  "use strict"
} while ((""))
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 158,
                "throwKeyword": {
                    "kind": 37757026,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 8
                },
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 17
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [
                            {
                                "kind": 134299649,
                                "text": "v",
                                "rawText": "v",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 20
                            },
                            {
                                "kind": 134299649,
                                "text": "h",
                                "rawText": "h",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 23
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 23
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [
                                {
                                    "kind": 201392131,
                                    "text": "use strict",
                                    "rawText": "\"use strict\"",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 41
                                }
                            ],
                            "statements": [],
                            "flags": 33,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 41
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 43
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 43
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 2,
                "end": 43
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 43,
                "end": 49
            },
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 201392131,
                    "text": "",
                    "rawText": "\"\"",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 54
                },
                "flags": 51,
                "transformFlags": 0,
                "start": 32,
                "end": 55
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "do throw function (v, h) {\n  \"use strict\"\n} while ((\"\"))",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'while' expected - start: 43, end: 49

```

