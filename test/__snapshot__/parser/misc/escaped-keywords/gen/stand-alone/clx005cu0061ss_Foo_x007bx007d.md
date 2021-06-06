# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/misc/escaped-keywords/autogen.md
- Path: kataw8/test\__snapshot__\parser\misc\escaped-keywords\gen\stand-alone
> :: test: stand-alone
> :: case: cl\u0061ss Foo {}
## Input

`````js
cl\u0061ss Foo {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 16464,
                "start": 0,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 10,
                "end": 14
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 16,
                    "end": 16
                },
                "flags": 14,
                "start": 32,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "cl\\u0061ss Foo {}",
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
✖ Keywords cannot contain escape characters - start: 0, end: 10

```

