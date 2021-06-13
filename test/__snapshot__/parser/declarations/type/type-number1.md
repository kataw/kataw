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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 4,
                "end": 8
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "number",
                            "rawText": "number",
                            "flags": 96,
                            "start": 9,
                            "end": 15
                        },
                        "type": null,
                        "defaultType": null,
                        "flags": 32,
                        "start": 9,
                        "end": 15
                    }
                ],
                "flags": 0,
                "start": 8,
                "end": 16
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 16,
                "end": 18
            },
            "type": {
                "kind": 134234347,
                "flags": 64,
                "start": 18,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "type foo<number> = string;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

