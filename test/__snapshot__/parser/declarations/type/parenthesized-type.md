# Kataw parser test case

## Input

`````js
type Foo = (string | number)
`````

## Options

### Parser Options

`````js
{}
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
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 768,
                "start": 4,
                "end": 8
            },
            "typeParameters": null,
            "type": {
                "kind": 137,
                "types": [
                    {
                        "kind": 134234347,
                        "flags": 768,
                        "start": 12,
                        "end": 18
                    },
                    {
                        "kind": 134234345,
                        "flags": 768,
                        "start": 20,
                        "end": 27
                    }
                ],
                "flags": 0,
                "start": 18,
                "end": 27
            },
            "flags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "type Foo = (string | number)",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

