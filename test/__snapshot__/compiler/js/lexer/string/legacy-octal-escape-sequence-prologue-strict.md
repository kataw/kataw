# Kataw parser test case

## Input

`````js
(function() {
  "asterisk: \052";
  "use strict";
});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(function() {\n  \"asterisk: \\052\";\n  \"use strict\";\n});",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 8456285,
                    "name": null,
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 11
                    },
                    "contents": {
                        "kind": 91,
                        "functionStatementList": {
                            "kind": 94,
                            "statements": [
                                {
                                    "kind": 2097233,
                                    "expression": {
                                        "kind": 4261583,
                                        "text": "asterisk: \u000052",
                                        "rawText": "asterisk: \u000052",
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 32
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 33
                                },
                                {
                                    "kind": 2097233,
                                    "expression": {
                                        "kind": 4261583,
                                        "text": "use strict",
                                        "rawText": "use strict",
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 48
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 49
                                }
                            ],
                            "multiline": true,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 49
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 51
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 51
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 52
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

