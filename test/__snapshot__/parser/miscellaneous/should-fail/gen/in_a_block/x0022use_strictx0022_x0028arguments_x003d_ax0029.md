# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: k
> :: test: in a block
> :: case: "use strict"; (arguments = a)
## Options

`````js
{}
`````
## Input

`````js
{ "use strict"; (arguments = a) }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 96,
                            "start": 1,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 15
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "arguments",
                                    "rawText": "arguments",
                                    "flags": 96,
                                    "start": 17,
                                    "end": 26
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 26,
                                    "end": 28
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 15,
                        "end": 31
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "{ \"use strict\"; (arguments = a) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

 { "use strict"; (arguments=a); } 
```

### Diagnostics

```javascript
✔ No errors
```

