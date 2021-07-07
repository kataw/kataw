# Kataw parser test case

## Input

`````js
(function() {
  "asterisk: \052";
  "use strict";
});
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
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
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
                        "transformFlags": 0,
                        "start": 10,
                        "end": 10
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
                                    "start": 33,
                                    "end": 48
                                }
                            ],
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "asterisk: \u000052",
                                        "rawText": "\"asterisk: \\052\"",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 32
                                    },
                                    "flags": 16,
                                    "transformFlags": 4096,
                                    "start": 13,
                                    "end": 33
                                }
                            ],
                            "flags": 33,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 49
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 51
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 51
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 52
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "(function() {\n  \"asterisk: \\052\";\n  \"use strict\";\n});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
(function () {

    "\"use strict\"";
    "\"asterisk: \052\"";
  });
```

### Diagnostics

```javascript
✔ No errors
```

