# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: as regular property in class
> :: case: enum
## Input

`````js
class x {enum: x}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "key": {
                            "kind": 134299649,
                            "text": "enum",
                            "rawText": "enum",
                            "flags": 768,
                            "start": 9,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 14,
                                    "end": 16
                                },
                                "typeParameters": null,
                                "autofix": 0,
                                "flags": 0,
                                "start": 14,
                                "end": 16
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 13,
                            "end": 16
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 9,
                        "end": 16
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "class x {enum: x}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

