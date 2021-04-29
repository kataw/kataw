# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: class x {}
## Input

`````js
return[ class x {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 0,
                                "start": 7,
                                "end": 13
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 13,
                                "end": 15
                            },
                            "typeParameters": null,
                            "classHeritage": null,
                            "members": {
                                "kind": 277,
                                "elements": [],
                                "flags": 32,
                                "start": 17,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 18
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 7,
                    "end": 18
                },
                "flags": 32,
                "start": 6,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 0
        }
    ],
    "isModule": false,
    "source": "return[ class x {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ ',' expected - start: 18, end: 18

```

