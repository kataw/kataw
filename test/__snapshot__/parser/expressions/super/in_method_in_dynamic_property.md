# Kataw parser test case

## Input

`````js
x = { foo(){ return x[super.foo]; }}
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
                    "flags": 64,
                    "start": 1,
                    "end": 3
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
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 9
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 10,
                                        "end": 11
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
                                                        "start": 12,
                                                        "end": 19
                                                    },
                                                    "expression": {
                                                        "kind": 536871042,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 19,
                                                            "end": 21
                                                        },
                                                        "expression": {
                                                            "kind": 129,
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
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 96,
                                                                "start": 28,
                                                                "end": 31
                                                            },
                                                            "flags": 536870944,
                                                            "start": 22,
                                                            "end": 31
                                                        },
                                                        "flags": 32,
                                                        "start": 19,
                                                        "end": 32
                                                    },
                                                    "flags": 80,
                                                    "start": 12,
                                                    "end": 33
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 12,
                                            "end": 33
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 35
                                    },
                                    "flags": 32,
                                    "start": 9,
                                    "end": 35
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 35
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 5,
                        "end": 35
                    },
                    "flags": 48,
                    "start": 3,
                    "end": 36
                },
                "flags": 32,
                "start": 0,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "x = { foo(){ return x[super.foo]; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

x = { foo() {
    return  ;
  } };
```

### Diagnostics

```javascript
✔ No errors
```

