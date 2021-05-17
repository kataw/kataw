# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { triple
> :: case: class x {}
## Input

`````js
{ { { class x {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [
                                            {
                                                "kind": 178,
                                                "declareKeyword": null,
                                                "decorators": null,
                                                "classKeyword": {
                                                    "kind": 37822544,
                                                    "flags": 0,
                                                    "start": 5,
                                                    "end": 11
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 11,
                                                    "end": 13
                                                },
                                                "typeParameters": null,
                                                "members": {
                                                    "kind": 277,
                                                    "classHeritage": null,
                                                    "elements": [],
                                                    "flags": 32,
                                                    "start": 15,
                                                    "end": 16
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 16
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 16
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 16
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 16
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "{ { { class x {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 16, end: 16

```

