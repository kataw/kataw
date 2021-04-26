# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default class {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 768,
                "start": 6,
                "end": 14
            },
            "declaration": {
                "kind": 178,
                "declareKeyword": null,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 768,
                    "start": 14,
                    "end": 20
                },
                "name": null,
                "typeParameters": null,
                "classHeritage": null,
                "members": {
                    "kind": 277,
                    "elements": [],
                    "flags": 256,
                    "start": 22,
                    "end": 23
                },
                "flags": 128,
                "start": 14,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": true,
    "text": "export default class {}",
    "fileName": "__root__",
    "flags": 0,
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
@{x2716}@ A class declaration without the 'default' modifier must have a name. - start: 20, end: 22

```

