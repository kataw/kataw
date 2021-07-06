# Kataw parser test case

## Input

`````js
class x extends y { dsda(){ return (a=super[bar]) => a; }}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 17
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "dsda",
                                    "rawText": "dsda",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 24
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 26
                                },
                                "returnType": null,
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
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 27,
                                                    "end": 34
                                                },
                                                "expression": {
                                                    "kind": 271,
                                                    "asyncKeyword": null,
                                                    "typeParameters": null,
                                                    "arrowPatameterList": {
                                                        "kind": 342,
                                                        "parameters": [
                                                            {
                                                                "kind": 281,
                                                                "ellipsisToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 36,
                                                                    "end": 37
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "right": {
                                                                    "kind": 130,
                                                                    "member": {
                                                                        "kind": 4259935,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 38,
                                                                        "end": 43
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "bar",
                                                                        "rawText": "bar",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 44,
                                                                        "end": 47
                                                                    },
                                                                    "flags": 536870944,
                                                                    "transformFlags": 4,
                                                                    "start": 38,
                                                                    "end": 48
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 34,
                                                                "end": 48
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 34,
                                                        "transformFlags": 0,
                                                        "start": 36,
                                                        "end": 49
                                                    },
                                                    "returnType": null,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 49,
                                                        "end": 52
                                                    },
                                                    "contents": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 52,
                                                        "end": 54
                                                    },
                                                    "flags": 34,
                                                    "transformFlags": 0,
                                                    "start": 34,
                                                    "end": 54
                                                },
                                                "flags": 80,
                                                "transformFlags": 256,
                                                "start": 27,
                                                "end": 55
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 55
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 57
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 57
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 57
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 57
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 58
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "class x extends y { dsda(){ return (a=super[bar]) => a; }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

class x  extends y {
  dsda() {
    return (a = super [bar]) => a;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

