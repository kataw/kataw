# Kataw parser test case

## Input

`````js
({async/*1*/ *
/*2*/
x
/*3*/




(/*4*/){}})
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "start": 2,
                                    "end": 7
                                },
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 7,
                                    "end": 14
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 97,
                                        "start": 14,
                                        "end": 22
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 416,
                                        "start": 34,
                                        "end": 40
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 41,
                                            "end": 41
                                        },
                                        "flags": 32,
                                        "start": 40,
                                        "end": 42
                                    },
                                    "flags": 416,
                                    "start": 22,
                                    "end": 42
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 42
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 42
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 43
                },
                "flags": 0,
                "start": 34,
                "end": 44
            },
            "flags": 16,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "({async/*1*/ *\n/*2*/\nx\n/*3*/\n\n\n\n\n(/*4*/){}})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

({async * x(){}});
```

### Diagnostics

```javascript
✔ No errors
```

