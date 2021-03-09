# Kataw parser test case

## Input

`````js
var C;

class C extends (function B() {
  with ({});
  return B;
}()) {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var C;\n\nclass C extends (function B() {\n  with ({});\n  return B;\n}()) {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "C",
                                "rawText": "C",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 3,
                                "end": 5
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 5
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 5
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C",
                    "rawText": "C",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 13,
                    "end": 15
                },
                "typeParameters": null,
                "classHeritage": {
                    "kind": 52,
                    "expression": {
                        "kind": 66224,
                        "expression": {
                            "kind": 66091,
                            "expression": {
                                "kind": 8456285,
                                "name": {
                                    "kind": 131102,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 33,
                                    "end": 35
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 37
                                },
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097400,
                                                "expression": {
                                                    "kind": 67224232,
                                                    "propertyList": {
                                                        "kind": 65722,
                                                        "properties": [],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 49,
                                                        "end": 49
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 48,
                                                    "end": 50
                                                },
                                                "statement": {
                                                    "kind": 6291526,
                                                    "flags": 16384,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 51,
                                                    "end": 52
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 52
                                            },
                                            {
                                                "kind": 2097346,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "B",
                                                    "rawText": "B",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 61,
                                                    "end": 63
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 52,
                                                "end": 64
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 39,
                                        "end": 64
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 66
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 66
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "intersects": false,
                                "start": 68,
                                "end": 68
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 66,
                            "end": 68
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 69
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 69
                },
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 71,
                    "end": 72
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 6,
                "end": 72
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 72
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 72
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

