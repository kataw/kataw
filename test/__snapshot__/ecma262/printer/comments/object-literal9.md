# Kataw parser test case

## Input

`````js
({async/*1*/*/*2*/x/*3*/(/*4*/){}})
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
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 7
                                },
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 7,
                                    "end": 13
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 19
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 416,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 31
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 32
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 33
                                    },
                                    "flags": 416,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 33
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 33
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 33
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 34
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "({async/*1*/*/*2*/x/*3*/(/*4*/){}})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
({ async /*1*/ */*2*/ x /*3*/(/*4*/ ) {} });
```

### Diagnostics

```javascript
✔ No errors
```

