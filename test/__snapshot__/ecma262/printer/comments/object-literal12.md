# Kataw parser test case

## Input

`````js
(

  /*1*/

  {

    async/*2*/*/*3*/

/*4*/x/*5*/(/*6*/){}}/*7*/)
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
                                    "flags": 353,
                                    "start": 15,
                                    "end": 26
                                },
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 26,
                                    "end": 32
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
                                        "start": 32,
                                        "end": 45
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 417,
                                        "start": 51,
                                        "end": 57
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 58,
                                            "end": 58
                                        },
                                        "flags": 32,
                                        "start": 57,
                                        "end": 59
                                    },
                                    "flags": 417,
                                    "start": 45,
                                    "end": 59
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 59
                            }
                        ],
                        "trailingComma": false,
                        "flags": 17,
                        "start": 15,
                        "end": 59
                    },
                    "flags": 49,
                    "start": 1,
                    "end": 60
                },
                "flags": 32,
                "start": 0,
                "end": 66
            },
            "flags": 16,
            "start": 0,
            "end": 66
        }
    ],
    "isModule": false,
    "source": "(\n\n  /*1*/\n\n  {\n\n    async/*2*/*/*3*/\n\n/*4*/x/*5*/(/*6*/){}}/*7*/)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 66
}
```

### Printed

```javascript

(
 /*1*/
{
  async/*2*/ */*3*/ 
   /*4*/x/*5*/(/*6*/) {}
}/*7*/);

```

### Diagnostics

```javascript
✔ No errors
```

