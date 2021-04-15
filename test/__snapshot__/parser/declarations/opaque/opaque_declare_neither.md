# Kataw parser test case

## Input

`````js
declare opaque type Foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "declare",
                "rawText": "declare",
                "flags": 768,
                "start": 0,
                "end": 7
            },
            "flags": 128,
            "start": 0,
            "end": 7
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": {
                "kind": 16630,
                "flags": 768,
                "start": 7,
                "end": 14
            },
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 7,
                "end": 23
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 768,
                "start": 19,
                "end": 23
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": null,
            "flags": 128,
            "start": 14,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "declare opaque type Foo",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 7,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 94,
            "error": "Missing initializer in type alias declaration",
            "start": 23,
            "end": 23
        }
    ],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

