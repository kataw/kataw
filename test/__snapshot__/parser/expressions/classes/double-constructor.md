# Kataw parser test case

## Input

`````js
(class x {
  constructor () {}
  constructor () {}
})
`````

## Output

### Hybrid CST

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
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 768,
                        "start": 1,
                        "end": 6
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "constructor",
                                        "rawText": "constructor",
                                        "flags": 768,
                                        "start": 10,
                                        "end": 24
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 16384,
                                        "start": 26,
                                        "end": 27
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 29,
                                            "end": 29
                                        },
                                        "flags": 256,
                                        "start": 27,
                                        "end": 30
                                    },
                                    "flags": 16384,
                                    "start": 24,
                                    "end": 30
                                },
                                "flags": 16384,
                                "start": 10,
                                "end": 30
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "constructor",
                                        "rawText": "constructor",
                                        "flags": 768,
                                        "start": 30,
                                        "end": 44
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 16384,
                                        "start": 46,
                                        "end": 47
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 49,
                                            "end": 49
                                        },
                                        "flags": 256,
                                        "start": 47,
                                        "end": 50
                                    },
                                    "flags": 16384,
                                    "start": 44,
                                    "end": 50
                                },
                                "flags": 16384,
                                "start": 30,
                                "end": 50
                            }
                        ],
                        "flags": 256,
                        "start": 10,
                        "end": 52
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 52
                },
                "flags": 256,
                "start": 0,
                "end": 53
            },
            "flags": 128,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "text": "(class x {\n  constructor () {}\n  constructor () {}\n})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Multiple constructor implementations are not allowed - start: 50, end: 52

```

