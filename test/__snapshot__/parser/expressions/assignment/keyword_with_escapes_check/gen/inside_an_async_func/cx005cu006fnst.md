# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: c
> :: test: inside an async func
> :: case: c\u006fnst
## Options

`````js
{}
`````
## Input

`````js
async () => {  c\u006fnst = x  }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "typeParameters": null,
            "parameters": [],
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 8,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 37757004,
                                "flags": 16464,
                                "start": 13,
                                "end": 25
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [],
                                "flags": 16777232,
                                "start": 25,
                                "end": 25
                            },
                            "flags": 33554448,
                            "start": 13,
                            "end": 25
                        }
                    ],
                    "flags": 16416,
                    "start": 13,
                    "end": 25
                },
                "flags": 32,
                "start": 11,
                "end": 25
            },
            "flags": 288,
            "start": 0,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 27,
                "end": 29
            },
            "flags": 16,
            "start": 27,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "async () => {  c\\u006fnst = x  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 13, end: 25
✖ Expected a `;` - start: 25, end: 27
✖ Declaration or statement expected - start: 29, end: 32

```

