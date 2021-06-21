# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: d
> :: test: should listen to use strict directive in global wrapped
> :: case: foo
## Options

`````js
{}
`````
## Input

`````js
"use strict"; (foo = x);
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 15,
                        "end": 18
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 18,
                        "end": 20
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 20,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 13,
                    "end": 22
                },
                "flags": 32,
                "start": 13,
                "end": 23
            },
            "flags": 16,
            "start": 13,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (foo = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

"use strict" (foo=x); 
```

### Diagnostics

```javascript
✔ No errors
```

