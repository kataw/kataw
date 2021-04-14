# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: not just commas
> :: case: undefined
## Input

`````js
foo(,,);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 768,
                            "start": 4,
                            "end": 4
                        },
                        {
                            "kind": 230,
                            "flags": 768,
                            "start": 5,
                            "end": 5
                        }
                    ],
                    "trailingComma": true,
                    "flags": 256,
                    "start": 4,
                    "end": 6
                },
                "flags": 256,
                "start": 0,
                "end": 7
            },
            "flags": 128,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "text": "foo(,,);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: not just commas
> :: case: undefined
## Input

`````js
foo(,,);
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: not just commas
> :: case: undefined
## Input

`````js
foo(,,);
`````
```

