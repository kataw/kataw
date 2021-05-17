# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: as regular property in class
> :: case: do
## Input

`````js
class x {do: x}
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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "do",
                            "rawText": "do",
                            "flags": 96,
                            "start": 9,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 9,
                        "end": 11
                    }
                ],
                "flags": 32,
                "start": 7,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 12,
                "end": 14
            },
            "flags": 16,
            "start": 12,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "class x {do: x}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 11, end: 12
✖ Declaration or statement expected - start: 14, end: 15

```

