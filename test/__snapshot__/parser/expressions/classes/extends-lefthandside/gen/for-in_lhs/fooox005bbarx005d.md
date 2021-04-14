# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: fooo[bar]
## Input

`````js
for (fooo[bar] in x) ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "kind": 166,
            "initializer": {
                "kind": 130,
                "member": {
                    "kind": 81921,
                    "text": "fooo",
                    "rawText": "fooo",
                    "flags": 768,
                    "start": 5,
                    "end": 9
                },
                "expression": {
                    "kind": 81921,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 768,
                    "start": 10,
                    "end": 13
                },
                "flags": 256,
                "start": 5,
                "end": 14
            },
            "expression": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 17,
                "end": 19
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 20,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "for (fooo[bar] in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: fooo[bar]
## Input

`````js
for (fooo[bar] in x) ;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: fooo[bar]
## Input

`````js
for (fooo[bar] in x) ;
`````
```

