# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as class name
> :: case: var
## Input

`````js
class var {}
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
            "name": null,
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 0,
                "end": 0
            },
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 155,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 5,
                "end": 9
            },
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
                                "flags": 256,
                                "start": 11,
                                "end": 11
                            },
                            "flags": 256,
                            "start": 9,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 9,
                        "end": 12
                    }
                ],
                "flags": 128,
                "start": 9,
                "end": 12
            },
            "flags": 128,
            "start": 5,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "class var {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 5,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 12,
            "error": "Missing initializer in destructuring declaration",
            "start": 12,
            "end": 12
        }
    ],
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as class name
> :: case: var
## Input

`````js
class var {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as class name
> :: case: var
## Input

`````js
class var {}
`````
```

