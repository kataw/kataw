# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: e
> :: test: stand alone
> :: case: var let
## Options

`````js
{}
`````
## Input

`````js
var let
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
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "let",
                            "rawText": "let",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 7
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "var let",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript

 var let; 
```

### Diagnostics

```javascript
✔ No errors
```

