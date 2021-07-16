# Kataw parser test case

## Input

`````js
function f() {
  "use strict"
  0777
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
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
                            "rawText": "\"use strict\"",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 29
                        }
                    ],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 511,
                                "rawText": "0777",
                                "flags": 131168,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 36
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 29,
                            "end": 36
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 36
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 38
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\"\n  0777\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '; ' expected - start: 29, end: 36

```

