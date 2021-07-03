# Kataw parser test case

## Input

`````js
({async/*1*/*/*2*/x

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
                                        "start": 13,
                                        "end": 19
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 416,
                                        "start": 31,
                                        "end": 37
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 38,
                                            "end": 38
                                        },
                                        "flags": 32,
                                        "start": 37,
                                        "end": 39
                                    },
                                    "flags": 416,
                                    "start": 19,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 39
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 39
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 40
                },
                "flags": 0,
                "start": 34,
                "end": 41
            },
            "flags": 16,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "({async/*1*/*/*2*/x\n\n/*3*/\n\n\n\n(/*4*/){}})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

({ async/*1*/ */*2*/ 
   /*3*/
  x(/*4*/) {} });

```

### Diagnostics

```javascript
✔ No errors
```

