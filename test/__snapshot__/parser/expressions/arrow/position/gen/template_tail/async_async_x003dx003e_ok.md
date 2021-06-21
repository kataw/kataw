# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: l
> :: test: template tail
> :: case: async async => ok
## Options

`````js
{}
`````
## Input

`````js
`a ${async async => ok} b`.length
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
                "kind": 129,
                "member": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "a ",
                            "text": "a ",
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 5,
                                    "end": 10
                                },
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 16
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 16,
                                    "end": 19
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "ok",
                                    "rawText": "ok",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 22
                                },
                                "flags": 288,
                                "start": 5,
                                "end": 22
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 22
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": " b",
                        "rawText": " b",
                        "flags": 96,
                        "start": 22,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 26
                },
                "expression": {
                    "kind": 134299649,
                    "text": "length",
                    "rawText": "length",
                    "flags": 96,
                    "start": 27,
                    "end": 33
                },
                "flags": 536870944,
                "start": 0,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "`a ${async async => ok} b`.length",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

 .length; 
```

### Diagnostics

```javascript
✔ No errors
```

