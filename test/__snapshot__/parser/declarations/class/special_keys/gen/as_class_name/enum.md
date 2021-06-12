# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/declarations/class/special_keys/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\class\special_keys\gen\as_class_name
> :: test: as class name
> :: case: enum
## Input

`````js
class enum {}
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
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "enum",
                "rawText": "enum",
                "flags": 96,
                "start": 5,
                "end": 10
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 12,
                    "end": 12
                },
                "flags": 10,
                "start": 32,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "class enum {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

class enum {}
```

### Diagnostics

```javascript
✔ No errors
```

