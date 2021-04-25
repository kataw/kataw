# Kataw parser test case

## Input

`````js
type foo<number> = string;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 4,
                "end": 8
            },
            "opaqueType": null,
            "typeParameters": {
                "kind": 146,
                "types": [
                    {
                        "kind": 134234345,
                        "flags": 768,
                        "start": 9,
                        "end": 15
                    }
                ],
                "flags": 0,
                "start": 8,
                "end": 16
            },
            "type": {
                "kind": 134234347,
                "flags": 768,
                "start": 18,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "type foo<number> = string;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

