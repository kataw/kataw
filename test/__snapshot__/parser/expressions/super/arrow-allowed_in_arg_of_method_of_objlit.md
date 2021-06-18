# Kataw parser test case

## Input

`````js
x={ dsda(){ return (a=super[bar]) => a; }}
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1,
                    "end": 2
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "dsda",
                                        "rawText": "dsda",
                                        "flags": 96,
                                        "start": 3,
                                        "end": 8
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 9,
                                        "end": 10
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
                                                        "start": 11,
                                                        "end": 18
                                                    },
                                                    "expression": {
                                                        "kind": 271,
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "start": 33,
                                                            "end": 36
                                                        },
                                                        "typeParameters": null,
                                                        "parameters": [
                                                            {
                                                                "kind": 281,
                                                                "ellipsisToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 96,
                                                                    "start": 20,
                                                                    "end": 21
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "right": {
                                                                    "kind": 536871042,
                                                                    "member": {
                                                                        "kind": 225,
                                                                        "superKeyword": {
                                                                            "kind": 4259935,
                                                                            "flags": 96,
                                                                            "start": 22,
                                                                            "end": 27
                                                                        },
                                                                        "flags": 96,
                                                                        "start": 22,
                                                                        "end": 27
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "bar",
                                                                        "rawText": "bar",
                                                                        "flags": 96,
                                                                        "start": 28,
                                                                        "end": 31
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 22,
                                                                    "end": 32
                                                                },
                                                                "flags": 32,
                                                                "start": 18,
                                                                "end": 32
                                                            }
                                                        ],
                                                        "asyncKeyword": null,
                                                        "returnType": null,
                                                        "contents": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 36,
                                                            "end": 38
                                                        },
                                                        "flags": 34,
                                                        "start": 18,
                                                        "end": 38
                                                    },
                                                    "flags": 80,
                                                    "start": 11,
                                                    "end": 39
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 11,
                                            "end": 39
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 41
                                    },
                                    "flags": 32,
                                    "start": 8,
                                    "end": 41
                                },
                                "flags": 32,
                                "start": 3,
                                "end": 41
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 3,
                        "end": 41
                    },
                    "flags": 48,
                    "start": 2,
                    "end": 42
                },
                "flags": 32,
                "start": 0,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "x={ dsda(){ return (a=super[bar]) => a; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

x = { dsda {
    return  (a = ) =>  a;
  } };
```

### Diagnostics

```javascript
✔ No errors
```

