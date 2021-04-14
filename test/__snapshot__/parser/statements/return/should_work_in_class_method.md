# Kataw parser test case

## Input

`````js
class x {foo(){ return }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 9,
                                "end": 12
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 13,
                                "end": 14
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 768,
                                                "start": 15,
                                                "end": 22
                                            },
                                            "expression": null,
                                            "flags": 128,
                                            "start": 0,
                                            "end": 15
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 15,
                                    "end": 22
                                },
                                "flags": 256,
                                "start": 14,
                                "end": 24
                            },
                            "flags": 0,
                            "start": 12,
                            "end": 24
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 24
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "class x {foo(){ return }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

