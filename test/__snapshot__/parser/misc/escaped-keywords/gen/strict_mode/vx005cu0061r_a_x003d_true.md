# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/misc/escaped-keywords/autogen.md
- Path: kataw8/test\__snapshot__\parser\misc\escaped-keywords\gen\strict_mode
> :: test: strict mode
> :: case: v\u0061r a = true
## Input

`````js
v\u0061r a = true
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 16464,
                "start": 0,
                "end": 8
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 8,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 24752947,
                            "flags": 96,
                            "start": 12,
                            "end": 17
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 17
                    }
                ],
                "flags": 16,
                "start": 8,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "v\\u0061r a = true",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 0, end: 8

```

