# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: case default
> :: case: class x {}
## Input

`````js
case class x {} default
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
                "start": 4,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 10,
                "end": 12
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 14,
                "end": 15
            },
            "flags": 128,
            "start": 4,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "case class x {} default",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 0,
            "end": 4
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 15,
            "end": 23
        }
    ],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: case default
> :: case: class x {}
## Input

`````js
case class x {} default
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: case default
> :: case: class x {}
## Input

`````js
case class x {} default
`````
```

