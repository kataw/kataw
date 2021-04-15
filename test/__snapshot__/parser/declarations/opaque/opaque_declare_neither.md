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
            "kind": 200,
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
            "flags": 32768,
            "start": 14,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "declare opaque type Foo",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
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

