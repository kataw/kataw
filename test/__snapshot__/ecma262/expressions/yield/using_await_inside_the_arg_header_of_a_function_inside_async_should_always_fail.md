# Kataw parser test case

## Input

`````js
let f = () => (y=await foo) => y;
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
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 9,
                                "end": 9
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 10,
                                "end": 13
                            },
                            "contents": {
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "expressions": [],
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
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 22,
                            "end": 26
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 22,
                        "end": 26
                    }
                ],
                "flags": 16,
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
                "text": "y",
                "rawText": "y",
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

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 23, end: 26
✖ ',' expected - start: 22, end: 26
✖ ',' expected - start: 26, end: 27
✖ Expected a `;` - start: 26, end: 27
✖ Declaration or statement expected - start: 27, end: 30

```

