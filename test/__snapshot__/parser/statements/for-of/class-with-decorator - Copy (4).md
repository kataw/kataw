# Kataw parser test case

## Input

`````js
@A
class x {}
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
            "decorators": {
                "kind": 207,
                "decoratorList": [
                    {
                        "kind": 34611453,
                        "expression": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 1,
                        "start": 1,
                        "end": 2
                    }
                ],
                "flags": 256,
                "start": 1,
                "end": 2
            },
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 2,
                "end": 8
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 12,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "@A\nclass x {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

