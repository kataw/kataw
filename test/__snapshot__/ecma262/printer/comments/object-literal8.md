# Kataw parser test case

## Input

`````js
(/*1*/{async/*2*/*/*3*/

/*4*/x/*5*/(/*6*/){}}/*7*/);

({
    /*1*/
    x: 0
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
                                    "start": 7,
                                    "end": 12
                                },
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 12,
                                    "end": 18
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
                                        "transformFlags": 0,
                                        "start": 18,
                                        "end": 31
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 416,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 43
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
                                            "start": 44,
                                            "end": 44
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 45
                                    },
                                    "flags": 416,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 45
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 45
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 45
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 46
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 52
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 53
        },
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
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 57,
                                    "end": 73
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 74,
                                    "end": 76
                                },
                                "flags": 33,
                                "transformFlags": 128,
                                "start": 57,
                                "end": 76
                            }
                        ],
                        "trailingComma": false,
                        "flags": 17,
                        "transformFlags": 0,
                        "start": 57,
                        "end": 76
                    },
                    "flags": 49,
                    "transformFlags": 8,
                    "start": 56,
                    "end": 78
                },
                "flags": 53,
                "transformFlags": 0,
                "start": 35,
                "end": 79
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 53,
            "end": 80
        }
    ],
    "isModule": false,
    "source": "(/*1*/{async/*2*/*/*3*/\n\n/*4*/x/*5*/(/*6*/){}}/*7*/);\n\n({\n    /*1*/\n    x: 0\n});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 80
}
```

### Printed

```javascript
({ async *x() {} });
({
    x: 0
  });

```

### Diagnostics

```javascript
✔ No errors
```

