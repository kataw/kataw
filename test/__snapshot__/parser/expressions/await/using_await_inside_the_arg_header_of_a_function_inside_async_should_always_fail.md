# Kataw parser test case

## Input

`````js
let f = () => (y=await foo) => y;
`````

## Output

### Hybrid CST

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
                            "original": "f",
                            "text": "f",
                            "rawText": " f",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 10,
                                "end": 13
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "flags": 32,
                                    "start": 13,
                                    "end": 22
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 22
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 22
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 22
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "original": "foo",
                            "text": "foo",
                            "rawText": " foo",
                            "flags": 96,
                            "start": 22,
                            "end": 26
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 22,
                        "end": 26
                    }
                ],
                "flags": 33554448,
                "start": 3,
                "end": 26
            },
            "flags": 33554448,
            "start": 0,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "original": "y",
                "text": "y",
                "rawText": " y",
                "flags": 96,
                "start": 30,
                "end": 32
            },
            "flags": 16,
            "start": 30,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "let f = () => (y=await foo) => y;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 22, end: 26
✖ ',' expected - start: 26, end: 27
✖ Expected a `;` - start: 26, end: 27
✖ Statement expected - start: 26, end: 27
✖ Statement expected - start: 27, end: 30

```

