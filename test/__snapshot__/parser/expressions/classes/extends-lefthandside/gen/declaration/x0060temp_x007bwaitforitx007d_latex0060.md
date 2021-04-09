# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: `temp {waitforit} late`
## Input

`````js
class A extends `temp {waitforit} late` {}
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
                "value": "A",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "expression": {
                    "kind": 458761,
                    "rawText": "temp {waitforit} late",
                    "text": "temp {waitforit} late",
                    "autofix": 0,
                    "flags": 256,
                    "start": 15,
                    "end": 39
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 39
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 41,
                "end": 42
            },
            "flags": 128,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "text": "class A extends `temp {waitforit} late` {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: `temp {waitforit} late`
## Input

`````js
class A extends `temp {waitforit} late` {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: `temp {waitforit} late`
## Input

`````js
class A extends `temp {waitforit} late` {}
`````
```

