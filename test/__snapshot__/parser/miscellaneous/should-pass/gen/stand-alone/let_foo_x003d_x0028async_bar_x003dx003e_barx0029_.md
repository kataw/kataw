# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: e
> :: test: stand-alone
> :: case: let foo = (async bar => bar);
## Options

`````js
{}
`````
## Input

`````js
let foo = (async bar => bar);
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 11,
                                    "end": 16
                                },
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 20
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 20,
                                    "end": 23
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 23,
                                    "end": 27
                                },
                                "flags": 288,
                                "start": 11,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 28
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 28
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 28
            },
            "flags": 33554448,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "let foo = (async bar => bar);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

 let foo = (bar =>bar); 
```

### Diagnostics

```javascript
✔ No errors
```

