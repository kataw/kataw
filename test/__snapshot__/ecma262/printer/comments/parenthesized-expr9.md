# Kataw parser test case

## Input

`````js
(/*1*/(/*2*/(/*3*/--/*4*/x/*5*/)/*6*/)/*7*/)
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
                    "kind": 121,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 128,
                            "operandToken": {
                                "kind": 196636,
                                "flags": 96,
                                "start": 13,
                                "end": 20
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 20,
                                "end": 26
                            },
                            "flags": 32,
                            "start": 13,
                            "end": 26
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 32
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 38
                },
                "flags": 32,
                "start": 0,
                "end": 44
            },
            "flags": 16,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "(/*1*/(/*2*/(/*3*/--/*4*/x/*5*/)/*6*/)/*7*/)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  (/*1*/(/*2*/(/*3*/--/*4*/x /*5*/) /*6*/) /*7*/);

```

### Diagnostics

```javascript
✔ No errors
```

