# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as super class name
> :: case: var
## Input

`````js
class x extends var {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "expression": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 15,
                    "end": 15
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 15
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 0,
                "end": 0
            },
            "flags": 128,
            "start": 0,
            "end": 15
        },
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [],
                                "multiline": false,
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 21,
                                "end": 21
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 19,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 19,
                        "end": 22
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 19,
                "end": 22
            },
            "autofix": 0,
            "flags": 128,
            "start": 15,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "class x extends var {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 15,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 12,
            "error": "Missing initializer in destructuring declaration",
            "start": 22,
            "end": 22
        }
    ],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as super class name
> :: case: var
## Input

`````js
class x extends var {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as super class name
> :: case: var
## Input

`````js
class x extends var {}
`````
```

